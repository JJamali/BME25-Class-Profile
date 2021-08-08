import Image from 'next/image'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div id="header">
      <div className={styles.nav}>
        <nav className={styles.navTop}>
          <span className={styles.logo}>
            <Image src="/crest.png" alt="Uwaterloo Crest" width={150} height={150} />
          </span>
          <div className={styles.title}>
            <span>BME Class of 2025</span>
            <select className={styles.select}>
              <option value="">Our Class</option>
              <option value="test">Test</option>
            </select>
          </div>
        </nav>
        <div className={styles.navBot}></div>
      </div>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted>
          <source src="/test.mp4" />
        </video>
      </div>
      <div className={styles.banner}></div>
      <div className={styles.container}>
        <h1>Text Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare faucibus mi ut tempus. Donec posuere mattis ante, pellentesque euismod neque tincidunt feugiat. Ut malesuada massa elementum mauris volutpat, at consequat orci pretium.
          Quisque et libero malesuada, hendrerit tellus quis, ullamcorper magna. Fusce eleifend turpis commodo tempus convallis. Morbi porttitor tortor elit, vitae faucibus metus mollis sit amet. Vestibulum consequat congue rhoncus.
          Integer feugiat, odio vitae pellentesque aliquam, turpis libero interdum nisi, sit amet dictum metus lectus in lorem. Mauris a eros justo. In vel justo non ex pulvinar tincidunt a eu ante. Vivamus non mi quam. Suspendisse eu euismod eros.
          Donec quis nulla sem. Nunc suscipit tincidunt purus, eu lobortis quam accumsan dictum. Curabitur tempor quam mi, sit amet interdum dolor rhoncus sit amet. Fusce et lobortis ex. Duis vitae sollicitudin nulla. Vivamus commodo orci justo, rutrum lobortis sapien imperdiet nec.
        </p>
        <p>Vestibulum tempus cursus ligula in venenatis. Nullam tincidunt, lacus sit amet efficitur finibus, justo erat fermentum lorem, at iaculis libero augue eget metus. Aenean molestie quam sit amet magna ornare, quis venenatis erat ultricies.
          Mauris porta suscipit nulla eleifend lacinia. Nulla feugiat metus quis pretium consectetur. In hac habitasse platea dictumst.
          Nunc ullamcorper ipsum id sapien viverra, sit amet imperdiet erat laoreet.Sed sem est, tincidunt quis aliquet vel, suscipit vitae justo. Curabitur elementum ullamcorper aliquet. Sed commodo, justo eu iaculis vehicula, nunc ligula efficitur augue, ac maximus purus metus sagittis leo.
          Maecenas non faucibus velit.
        </p>
        <p>Donec et efficitur eros. In condimentum mollis eros et eleifend.
          Donec a mattis neque. Donec rhoncus dignissim dignissim. Nulla ut ipsum ultrices, rutrum enim sed, sodales ante. Sed porta eros dictum massa maximus, eget bibendum orci auctor. Aenean nulla velit, porta ut volutpat placerat, posuere eu mi. Cras maximus luctus dignissim. Phasellus in ornare mauris, sit amet ultricies turpis. Mauris a vestibulum orci, vel mollis felis. Pellentesque ipsum tellus, viverra in felis quis, suscipit luctus massa.
          Aliquam porttitor, tellus at elementum egestas, orci ex ultricies ex, quis malesuada felis massa non velit. Phasellus non fermentum nunc, sed vestibulum ipsum. Nullam viverra nulla nisi, ac imperdiet est porta eget. Etiam placerat egestas dui nec imperdiet. Ut hendrerit, sem id posuere euismod, libero nulla tristique ligula, id feugiat massa ipsum at ex. Sed hendrerit ante eros, sed posuere velit consectetur quis. Curabitur bibendum tempor felis id accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Mauris ligula dui, viverra vel ornare vitae, efficitur non nisl.
        </p>
        <div className={styles.slide}>
          <iframe src="/test2.pdf" styles="frameborder=0;" width={775} height={450}></iframe>
        </div>
        <p>The PDF version is also available <a className={styles.link} href="https://github.com/JJamali/BME25-Class-Profile/tree/main/frontend/class-profile">here</a></p>
      </div>
      <footer className={styles.footer}>
        <ul>
          <li className={styles.li}>
            <Image src="/socialMedias.png" alt="Social Medias" width={200} height={50} />
          </li>
        </ul>
      </footer>
    </div>
  )
}