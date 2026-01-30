export default function SearchBar({ styles }: { styles: any }) {
    return (
        <form className={styles.searchBar} action="/search" method="GET">
            <input className={styles.searchInput} type="text" placeholder="Search..." aria-label="Search products" name="search" id="search" required/>
            <button className={styles.searchButton} type="submit">Search</button>
        </form>
    );
}