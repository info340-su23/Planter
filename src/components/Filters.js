import './Filters.css'

export default function Filters() {
    return (
    <div class="filter-container">
        <div class="filters">
            <div className="left-tags">
                <button className="tag events" type="button">Events</button>
                <button className="tag tips" type="button">Plant Tips</button>
                <button className="tag sale" type="button">For Sale</button>
                <button className="tag help" type="button">Help Wanted</button>
                <button className="tag sustainability" type="button">Sustainbility</button>
                <button className="tag progress" type="button">Progress</button>
            </div>
        <button className="tag bookmark" type="button"><span class="material-icons" aria-label="bookmark">bookmark</span>View saved</button>
        </div>            
    </div>
    );
}