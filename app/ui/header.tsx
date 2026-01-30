import Image from "next/image"; 
export default function Header({styles}: {styles: any}) {
    return (
        <header className={styles.header}>
            <Image
                className={styles.hambuger}
                src="/hambuger.png"
                alt="Navigation Menu"
                width={50}
                height={50}
                priority
            />
            <h1>HandCrafted Haven</h1>
        </header>
    );
}