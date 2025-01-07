import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { assets } from "./assets/images/assets";

const App = () => {
  const bgStyle = {
    backgroundImage: `url(${assets.BgImage2})`,
    backroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "scroll",
  };

  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div className="container">
        <div style={bgStyle} className="rounded-3xl">
          <Hero />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          unde, minima esse quod totam consequatur ducimus saepe nulla vel id
          obcaecati modi quos cupiditate nemo corporis fugiat provident illum?
          Sunt facere cumque dignissimos molestiae nesciunt cum quod aut placeat
          necessitatibus nisi illum officiis laborum voluptatibus ea, veritatis
          iure deserunt numquam officia harum doloremque libero? Similique,
          eligendi! Veniam possimus nemo distinctio facilis impedit, blanditiis
          quod sint repellendus aut nobis quis, inventore ipsa saepe! Aspernatur
          laboriosam illum, minima unde consectetur rem excepturi molestias ipsa
          est aperiam, optio inventore exercitationem quia soluta iusto incidunt
          tenetur totam, consequatur quasi quo ipsam voluptatibus? Excepturi
          doloribus beatae laudantium porro repellendus adipisci. Excepturi,
          veritatis recusandae! Magnam expedita vitae officiis praesentium, quae
          saepe minus hic nemo voluptatibus nobis ullam voluptate illo eius
          error facere iure molestias in dolore ad natus provident nisi. Earum,
          distinctio mollitia! Voluptates tenetur iste cum, neque voluptas
          architecto nobis magnam ex consequatur blanditiis corrupti vel minima
          facere itaque quidem laborum, tempore asperiores. Eaque voluptatum
          nisi, reiciendis incidunt quisquam magnam sit blanditiis voluptatibus
          nam explicabo necessitatibus quasi adipisci sapiente est labore? Illum
          illo adipisci, ad consequuntur doloremque corrupti voluptatibus at
          sequi excepturi porro exercitationem, quibusdam doloribus commodi sunt
          ut! Sunt, atque incidunt? Aliquid in corrupti accusantium unde nihil.
          Expedita molestiae esse saepe eaque facilis. Voluptatum, nihil in
          dolor ut cum animi harum est consequuntur sapiente eius dolorem
          quidem, officia obcaecati, atque suscipit amet recusandae autem vero
          reiciendis. Distinctio quasi, voluptatum eligendi reprehenderit
          doloribus officia accusantium aliquam exercitationem ipsa? Facilis
          excepturi molestias similique in dolores fugiat et. Consectetur
          officiis adipisci eius libero rem error architecto quod exercitationem
          ea amet, dicta provident neque excepturi expedita voluptates ducimus
          veritatis cumque tempore illo incidunt, hic illum. Modi, quos! Eius
          pariatur fugit magnam reprehenderit consequuntur. Cum praesentium ut
          accusamus excepturi inventore tenetur est animi natus nemo culpa!
          Facere rem tempore ex ullam corrupti magnam dicta voluptate itaque
          quam? Animi voluptates optio repellat tenetur tempore, aliquid,
          recusandae unde saepe asperiores labore nostrum quisquam cupiditate
          sequi facere quibusdam! Nulla, tempore eum! Non nostrum cum facere
          sunt incidunt quae quia suscipit laborum veniam, praesentium iure unde
          minus hic corporis. Tempora iste in nulla magni ad nihil optio debitis
          similique, qui possimus! Labore placeat magnam molestias optio amet
          rerum nisi quisquam? Et commodi dignissimos vel placeat deleniti
          facere itaque perferendis necessitatibus quasi eaque? Illo suscipit
          velit maiores vitae molestias recusandae, temporibus quod, earum,
          impedit mollitia perferendis corporis ipsum fugit cumque? Facere
          obcaecati, minima enim voluptates, exercitationem fugiat tempora totam
          quis mollitia eveniet saepe libero ducimus sed! Voluptatem hic quia ad
          atque molestias eveniet aut optio sed impedit, iste maxime minima
          nesciunt eius voluptate enim totam, laudantium consequatur. Minus
          expedita vel nostrum voluptas nesciunt excepturi voluptatibus quam
          nulla possimus, ut velit, cum id itaque animi amet totam placeat quo
          dolorem? Voluptatum animi laboriosam quaerat corrupti ipsa laudantium
          esse, modi porro autem dolor provident nesciunt rerum doloremque
          dolores perspiciatis inventore eius expedita consequatur debitis
          corporis. Ex minima quia quam, ullam pariatur enim ipsam. Eaque
          consequatur placeat optio dolorum, ea sint, omnis, explicabo odio
          architecto in ducimus!
        </div>
      </div>
    </div>
  );
};

export default App;
