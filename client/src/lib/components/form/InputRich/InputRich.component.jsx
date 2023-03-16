import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill, { Quill } from 'react-quill';
import classNames from './InputRich.module.scss';
import './InputRich.theme.css';

const Block = Quill.import('blots/block');
Block.tagName = 'DIV';
Quill.register(Block, true);

const _config = {
    theme: 'snow',
    formats: [
        'bold', 'italic', 'underline','strike', 'blockquote', 'list', 'indent', 'link', 'clean'
    ],
    modules: {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, { 'indent': '-1'}, { 'indent': '+1' }],
                ['link', 'clean'],
            ],
            handlers: {
                'blockquote': function() {
                    let selected = this.quill.getSelection(),
                        text = this.quill.getText(selected.index, selected.length);
                    this.quill.deleteText(selected.index, selected.length);
                    this.quill.clipboard.dangerouslyPasteHTML(
                        selected.index,
                        '&ldquo;' + text + '&rdquo;'
                    );
                },
                'link': function(value) {
                    if(value) {
                        let selected = this.quill.getSelection(),
                            text = this.quill.getText(selected.index, selected.length),
                            href = prompt('Enter the URL for "' + text + '"');
                        this.quill.format('link', href);
                    }
                }
            }
        }
    }
};

const InputRich = (props) => {

    const [ref, ] = useState(useRef());

    const onChange = (value) => {
        (props.onChange.length === 2)
            ? props.onChange(props.id, value)
            : props.onChange(value)
    };

    return (
        <React.Fragment>
            <div className={classNames.group}>
                <label className={classNames.label}>{props.label}</label>
                <div className={classNames.input}>
                    <ReactQuill
                        ref={ref}
                        theme={_config.theme}
                        modules={_config.modules}
                        formats={_config.formats}
                        value={props.value}
                        onChange={onChange}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

InputRich.propTypes = {
    /** Identifier used as return value with onChange */
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    /** Label for the rich text input */
    label: PropTypes.string.isRequired,
    /** Value of the rich text input */
    value: PropTypes.string.isRequired,
    /** Callback function to handle value change as HTML */
    onChange: PropTypes.func.isRequired
};

InputRich.defaultProps = {
    id: null,
    label: null
};

export default InputRich;
