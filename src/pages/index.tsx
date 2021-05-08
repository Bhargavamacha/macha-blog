import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <img src="/images/me.png" className="image" />
          <h1>
            Hi there! I am Bhargava Sai Macha<span className="fancy">.</span>
          </h1>
          {/* <span className="handle">@nextjs-netlify-blog</span> */}
          <h2>You've wandered upon my personal website :)</h2>
          <h2>Checkout what I am working on, my thoughts and let's get connected!</h2>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display:flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.2rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.45rem;
          font-weight: 400;
          line-height: 1.25;
          width:100%
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }
        .image {
          width:121px;
          height:121px;
          border-radius:1000px;
          margin-bottom:10px;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 2.5rem;
          }
          h2 {
            font-size: 1.45rem;
            width:80%
          }
        }
      `}</style>
    </Layout>
  );
}
