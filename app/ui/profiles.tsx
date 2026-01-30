import Image from "next/image";

export default function ProfileWrapper({profiles, styles}: {profiles: any[], styles: any}) {
    return (
        <div className={styles.profileGrid}>
          {profiles.map((profile) => (
            <Profile key={profile.id} profile={profile} styles={styles} />
            ))}
        </div>
    )
}

export function Profile({key, profile, styles}: {key: any, profile: any, styles: any}) {
    return (
        <div key={key} className={styles.profileCard}>
            <h4>{profile.name}</h4>
            <Image src={profile.image} alt={profile.name} width={150} height={150} loading="lazy"/>
            <p>{profile.bio}</p>
        </div>
    )
}