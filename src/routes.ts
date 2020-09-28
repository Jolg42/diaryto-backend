import { Route, perfixRoute } from "./base/route"
import { index, getPosts } from "./views/main"

const routeMap: Route[] = [
    { url: '/', view: index, methods: ["GET"] },
    
    ...perfixRoute('/api/',
        { url: '', view: getPosts, methods: ["GET"] },
    )
]

export { routeMap }