const root = (req, res, next) => {
    res.locals.response = {
        uri: 'testbed',
        foo: 'bar',
        baz: {
            foo: 'bar',
        },
    }
    next()
}

export default {
    root,
}
