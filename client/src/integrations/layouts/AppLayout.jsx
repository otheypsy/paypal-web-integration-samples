import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useResolvedPath} from 'react-router-dom';
import InputText from '../../lib/components/form/InputText/InputText.component';
import AppLink from "../components/AppLink";
import TagPill from "../components/TagPill";

const FilterGroup = (props) => {
    return (
        <>
            <InputText
                label={'-- search --'}
                value={props.text}
                onChange={props.onTextChange}
            />
            <TagPill
                key={'clearAll'}
                label={'X'}
                onClick={props.reset}
                btnColor={'danger'}>
            </TagPill>
            {Object.keys(props.tags).map(tag => {
                const color = (props.tags[tag]) ? 'primary' : 'secondary';
                return (
                    <TagPill
                        key={tag}
                        label={tag}
                        onClick={props.onTagClick}
                        btnColor={color}>
                    </TagPill>
                )
            })}
        </>
    )


}

const AppLayout = (props) => {

    const active = useResolvedPath();
    const navigate = useNavigate();
    const [labelFilter, setLabelFilter] = useState('');
    const [tagFilter, setTagFilter] = useState([]);

    useEffect(() => {
        initFilters();
    }, [active]);

    const initFilters = () => {
        const tagFilter = {};
        props.links.forEach((link) => {
            link.data.tags.forEach((tag) => {
                tagFilter[tag] = false
            });
        });
        setLabelFilter('');
        setTagFilter(tagFilter);
    };


    const filterTags = (tags) => {
        return Object.keys(tagFilter).every((tag) => {
            return !(tagFilter[tag] && !tags.includes(tag));
        });
    };

    const filterLabel = (label) => {
        return label.toLowerCase().includes(labelFilter.toLocaleLowerCase());
    }

    const onLinkClick = (to) => navigate(to);

    const onTagClick = (label) => {
        setTagFilter({
            ...tagFilter,
            [label]: !tagFilter[label]
        });
    };

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <FilterGroup
                        tags={tagFilter}
                        onTagClick={onTagClick}
                        text={labelFilter}
                        onTextChange={setLabelFilter}
                        reset={initFilters}
                    />
                    <br /><br />
                    <div className="list-group p-2">
                        {props.links.map((link) => {
                            const isVisible = (filterTags(link.data.tags) && filterLabel(link.label));
                            return <AppLink
                                key={link.path}
                                to={link.path}
                                label={link.label}
                                isVisible={isVisible}
                                onClick={onLinkClick}
                            />
                        })}
                    </div>
                </div>
                <div className="col-9">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AppLayout;
