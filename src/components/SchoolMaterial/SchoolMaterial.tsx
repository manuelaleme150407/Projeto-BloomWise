import "./SchoolMaterial.css";
import { useEffect, useState } from "react";
import { api } from "../../api";
import { useCart } from "../ShoppingCar/CartContext";
import ShoppingCart from "../ShoppingCar/ShoppingCar";
import { Link } from "react-router-dom";
import sacolaIcon from "../../assets/icons/sacolaIcon.png";
import DonationCard from "../../components/DonationCard/DonationCard";

interface Doacao {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
  imagemUrl: string;
}

export default function SchoolMaterial() {
  const [doacoes, setDoacoes] = useState<Doacao[]>([]);
  const [loading, setLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart, isPurchased } = useCart();

  const fetchDoacoes = async () => {
    try {
      const res = await api.get("/doacao/");
      console.log("🟢 Resposta do backend:", res.data);


      const lista = res.data.filter(
        (d: Doacao) =>
          (d.categoria || "").toString().trim().toLowerCase() ===
          "material escolar"
      );

      const normalizadas = lista.map((d: any) => {
        const nome = d.imagemUrl || "";
        const imagemUrl = nome.startsWith("/uploads")
          ? `http://localhost:8080${nome}`
          : `http://localhost:8080/uploads/${nome}`;
        return { ...d, imagemUrl };
      });

      setDoacoes(normalizadas);
    } catch (err) {
      console.error("Erro ao buscar doações:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoacoes();
  }, []);

  return (
    <section className="materialSection">
      <div className="materialHeader">
        <h1 className="materialTitle">Materiais Escolares</h1>
        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          <img src={sacolaIcon} alt="Sacola" className="cart-icon" />
        </button>
      </div>

      <div className="materialCategoria">
        {loading ? (
          <p className="mensagem-vazia">Carregando...</p>
        ) : doacoes.length === 0 ? (
          <p className="mensagem-vazia">Nenhuma doação cadastrada.</p>
        ) : (
          doacoes
            .filter((p) => !isPurchased(p.id))
            .map((p) => (
              <DonationCard
                key={p.id}
                titulo={p.titulo}
                descricao={p.descricao}
                imagemUrl={p.imagemUrl}
                addToCart={() => {
                  addToCart({
                    id: p.id,
                    name: p.titulo,
                    description: p.descricao,
                    image: p.imagemUrl,
                  });
                  setIsCartOpen(true);
                }}
              />
            ))
        )}
      </div>

      <Link to="/Receiver" className="arrow-button"></Link>

      {isCartOpen && <ShoppingCart onClose={() => setIsCartOpen(false)} />}
    </section>
  );
}



// import "./SchoolMaterial.css";
// import { useCart } from "../ShoppingCar/CartContext"; 
// import caderno from "../../assets/images/caderno.png";
// import mochilas from "../../assets/images/mochila.png";
// import livro from "../../assets/images/livro.png";
// import sacolaIcon from "../../assets/icons/sacolaIcon.png";
// import { useState } from "react";
// import ShoppingCart from "../ShoppingCar/ShoppingCar";
// import { Link } from "react-router-dom";

// function SchoolMaterial() {
//   const { addToCart, isPurchased } = useCart();
//   const [isCartOpen, setIsCartOpen] = useState(false); 

//   const products = [
//     {
//       id: 1,
//       name: "Mochila + Estojo",
//       description:
//         "Usados, mas super bem cuidados, perfeitos para acompanhar a rotina escolar ou do dia a dia.",
//       image: mochilas,
//       className: "bag",
//       pClass: "mochila",
//     },
//     {
//       id: 2,
//       name: "Livro Paradidático 1984",
//       description:
//         "Leitura enriquecedora, ideal para estudantes e amantes da literatura.",
//       image: livro,
//       className: "book",
//       pClass: "livro",
//     },
//     {
//       id: 3,
//       name: "Conjunto de cadernos",
//       description:
//         "Já utilizados parcialmente, mas com bastante espaço livre para novas anotações.",
//       image: caderno,
//       className: "notebook",
//       pClass: "cadernos",
//     },
//   ];

//   return (
//     <section className="materialSection">
//       <div className="materialHeader">
//         <h1 className="materialTitle">Material Escolar</h1>
//         <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
//           <img src={sacolaIcon} alt="Sacola" className="cart-icon" />
//         </button>
//       </div>

//       <div className="materialCategoria">
//         {products
//           .filter((p) => !isPurchased(p.id))
//           .map((p) => (
//             <div key={p.id} className={p.className}>
//               <img src={p.image} alt={p.name} />
//               <p className={p.pClass}>
//                 {p.name}: <br />
//                 {p.description}
//               </p>
//               <button
//                 type="button"
//                 className="btn-add"
//                 onClick={() => {
//                   addToCart({
//                     id: p.id,
//                     name: p.name,
//                     description: p.description,
//                     image: p.image,
//                   });
//                   setIsCartOpen(true);
//                 }}
//               >
//                 Adicionar à sacola
//               </button>
//             </div>
//           ))}
//       </div>
//       <Link to="/Receiver" className="arrow-button"></Link>

//       {isCartOpen && <ShoppingCart onClose={() => setIsCartOpen(false)} />}
//     </section>
//   );
// }

// export default SchoolMaterial;
