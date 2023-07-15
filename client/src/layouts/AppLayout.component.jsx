import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import InputText from '../lib/components/form/InputText/InputText.component.jsx'
import AppLink from '../components/AppLink.component.jsx'
import TagPill from '../components/TagPill.component.jsx'

const FilterGroup = (props) => {
    return (
        <>
            <InputText label={'-- search --'} value={props.text} onChange={props.onTextChange} />
            <TagPill key={'clearAll'} label={'X'} onClick={props.reset} btnColor={'danger'}></TagPill>
            {Object.keys(props.tags).map((tag) => {
                const color = props.tags[tag] ? 'primary' : 'secondary'
                return <TagPill key={tag} label={tag} onClick={props.onTagClick} btnColor={color}></TagPill>
            })}
        </>
    )
}

const AppLayout = (props) => {
    const navigate = useNavigate()
    const [labelFilter, setLabelFilter] = useState('')
    const [tagFilter, setTagFilter] = useState([])

    // Initialize Filters
    useEffect(() => {
        const tagFilter = {}
        props.links.forEach((link) => {
            if (link.tag) tagFilter[link.tag] = false
        })
        setLabelFilter('')
        setTagFilter(tagFilter)
    }, [props.links])

    const resetFilters = () => {
        const newTagFilter = {}
        for (const tag in tagFilter) {
            newTagFilter[tag] = false
        }
        setTagFilter(newTagFilter)
    }

    const filterTag = (routeTag) => {
        return Object.keys(tagFilter).every((tag) => {
            return !(tagFilter[tag] && routeTag !== tag)
        })
    }

    const filterLabel = (label) => {
        return label?.toLowerCase()?.includes(labelFilter.toLocaleLowerCase())
    }

    const onLinkClick = (to) => navigate(to)

    const onTagClick = (clickedTag) => {
        const newTagFilter = {}
        for (const tag in tagFilter) {
            newTagFilter[tag] = tag === clickedTag
        }
        setTagFilter(newTagFilter)
    }

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <FilterGroup
                        tags={tagFilter}
                        onTagClick={onTagClick}
                        text={labelFilter}
                        onTextChange={setLabelFilter}
                        reset={resetFilters}
                    />
                    <br />
                    <br />
                    <div className="list-group p-2">
                        {props.links.map((link) => {
                            const isVisible = filterTag(link.tag) && filterLabel(link.label)
                            return (
                                <AppLink
                                    key={link.path}
                                    to={link.path}
                                    label={link.label}
                                    isVisible={isVisible}
                                    tag={link.tag}
                                    onClick={onLinkClick}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="col-9">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

AppLayout.propTypes = {
    links: PropTypes.array.isRequired,
}

export default AppLayout
