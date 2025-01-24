import { BookshelfCard } from "../components/BookshelfCard"
import './PageStyles.css'

export const BookShelfPage = () => {
    return (
        <>
            <h1>My Bookshelf</h1>
            <div className="BookShelfContainer">
                <div className='BookShelfWrapper'>
                    <BookshelfCard />
                    <BookshelfCard />
                    <BookshelfCard />
                    <BookshelfCard />
                </div>
            </div>
        </>
    )
}