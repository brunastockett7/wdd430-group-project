export default function Footer({styles}: {styles: any}) {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} HandCrafted Haven. All rights reserved.</p>
            <p>Team 5</p>
        </footer>
    );
}