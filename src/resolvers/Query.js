const Query = {
    users(parent, args, { db, prisma }, info) {
        const opArgs = {}

        if (args.query) {
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                },{
                    email_contains: args.query
                }]
            }
        }

        return prisma.query.users(opArgs, info)

        // if (!args.query) {
        //     return db.users
        // }

        // return db.users.filter((user) => {
        //     return user.name.toLowerCase().includes(args.query.toLowerCase())
        // })
    },
    posts(parent, args, { db }, info) {
        const opArgs = {}

        if (args.query) {
            opArgs.where = {
                OR: [{
                    title_contains: args.query
                },{
                    body_contains: args.query
                }]
            }
        }
        return prisma.query.users(opArgs, info)

        // if (!args.query) {
        //     return db.posts
        // }

        // return db.posts.filter((post) => {
        //     const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
        //     const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
        //     return isTitleMatch || isBodyMatch
        // })
    },
    comments(parent, args, { db }, info) {
        return db.comments
    },
    me() {
        return {
            id: '123098',
            name: 'Mike',
            email: 'mike@example.com'
        }
    },
    post() {
        return {
            id: '092',
            title: 'GraphQL 101',
            body: '',
            published: false
        }
    }
}

export { Query as default }