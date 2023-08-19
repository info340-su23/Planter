import '../index.css'

export default function Searchbar() {
    return (
        <div>
            <form className="search-form" action="/search" method="get">
                <div className="search-bar">
                    <label htmlFor="search-input" class="button">
                        <button type="submit" aria-label="Search">
                            <span className="material-icons">search</span>
                        </button>
                    </label>
                    <input type="search" id="search-input" placeholder="Search forums" aria-label="Search input" />
                </div>
            </form>
        </div>
    );
}