const uuid = () => {
    return crypto.randomUUID() || Date.now()
}

const checkActiveLink = (active, mount = '', path) => {
    return active.startsWith(mount + '/' + path)
}

const hocCompose = (BaseComponent, ...hocs) => {
    return hocs.reduce((Component, withHoc) => {
        return withHoc(Component)
    }, BaseComponent)
}

export { checkActiveLink, hocCompose, uuid }
export default { checkActiveLink, hocCompose, uuid }
