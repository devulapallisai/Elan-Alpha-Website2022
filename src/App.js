import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Helmet } from "react-helmet";
library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elan & Nvision</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="icon" href="../public/logo192.png" sizes="16x16"/>
      </Helmet>
      Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed cumque ex obcaecati et modi quo aliquid commodi porro aperiam veniam, necessitatibus nihil voluptas? Accusantium natus earum laudantium, enim hic ad? Sint eaque dolore vitae dolor, aspernatur et unde, quia corporis itaque ipsam blanditiis non nostrum voluptatum excepturi quas, mollitia doloremque! Non dolore illo animi, nisi at, officiis quia perferendis ea, eaque pariatur iusto similique! Non atque nobis similique, tempore molestiae aperiam mollitia labore voluptatum maiores nam repudiandae praesentium quasi repellendus ab aliquam. In ut porro, excepturi illo hic dolore totam eius ipsa, culpa et, inventore dolores exercitationem quaerat earum!
    </div>
  );
}

export default App;
