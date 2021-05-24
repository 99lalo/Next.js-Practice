import Meta from "../components/Meta";
import Link from "next/link";
import aboutStyles from "../styles/About.module.css";
const about = () => {
  return (
    <div className={aboutStyles.about}>
      <Meta title="About" />
      <h1>About</h1>
      <p>
        This is a website made following Next.js Crash Course from{" "}
        <Link href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA">
          Traversy Media
        </Link>
      </p>
    </div>
  );
};
export default about;
