
import { image } from "../../../resources/images";
import { Link } from "react-router-dom"

import context from "../../../resources/string"
import { Navigation,Combothree, Searchbox, Logo, Linkz} from "../navbar/navstyle";

export default function Navbar() {
    return (
        <Navigation>
            <Combothree>
            <Link to="/home">
            <Logo src={image.mprofile} /></Link>
            <Searchbox>
                <Logo src={image.searchimage} />
                <Linkz to="/search">{context.search}</Linkz>
            </Searchbox>
            <Searchbox>
                <Logo src={image.trendingup} />
                <Linkz to="/trending">{context.trend}</Linkz>
            </Searchbox>
            </Combothree>
            <Searchbox>
                <Logo src={image.addcircle} />
                <Linkz to="/Create">{context.create}</Linkz>
            </Searchbox>

        </Navigation>

    )
}