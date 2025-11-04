import "./Eletronics.css";
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

export default function Eletronics() {
  const [doacoes, setDoacoes] = useState<Doacao[]>([]);
  const [loading, setLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart, isPurchased } = useCart();

  // Buscar doações do backend
  const fetchDoacoes = async () => {
    try {
      const res = await api.get("/doacao/");
      console.log("🟢 Resposta do backend:", res.data);

      // Filtrar apenas doações da categoria "Aparelhos Eletrônicos"
      const lista = res.data.filter(
        (d: Doacao) =>
          (d.categoria || "").toString().trim().toLowerCase() ===
          "aparelhos eletrônicos"
      );

      // Ajustar o caminho da imagem
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
    <section className="eletronicsSection">
      <div className="materialHeader">
        <h1 className="eletronicsTitle">Aparelhos Eletrônicos</h1>
        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          <img src={sacolaIcon} alt="Sacola" className="cart-icon" />
        </button>
      </div>

      <div className="eletronicsCategoria">
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

// import "./Eletronics.css";
// import { useEffect, useState } from "react";
// import { api } from "../../api";
// import { Link } from "react-router-dom";
// import DonationCard from "../../components/DonationCard/DonationCard";

// interface Doacao {
//   id: number;
//   titulo: string;
//   descricao: string;
//   categoria: string;
//   imagemUrl: string;
// }

// export default function Eletronics() {
//   const [doacoes, setDoacoes] = useState<Doacao[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchDoacoes = async () => {
//     try {
//       setLoading(true);
//       const res = await api.get("/doacao");
//       console.log("GET /doacao response:", res.data); // <<-- important debug
//       const lista = res.data.filter((d: Doacao) =>
//         (d.categoria || "").toString().trim().toLowerCase() === "aparelhos eletrônicos"
//       );

//       // normaliza imagem (maneja '/uploads/nome' ou 'nome')
//       const normalizadas = lista.map((d: any) => {
//         const nome = d.imagemUrl || "";
//         const imagemUrl = nome.startsWith("/uploads")
//           ? `http://localhost:8080${nome}`
//           : `http://localhost:8080/uploads/${nome}`;
//         return { ...d, imagemUrl };
//       });

//       setDoacoes(normalizadas);
//     } catch (err) {
//       console.error("Erro ao buscar doações:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDoacoes();
//     // opcional: refetch quando volta à página (se usar react-router v6, pode usar useLocation)
//   }, []);

//   return (
//     <section className="eletronicsSection">
//       <div className="materialHeader">
//         <h1 className="eletronicsTitle">Aparelhos Eletrônicos</h1>
//       </div>

//       <div className="eletronicsCategoria">
//         {loading ? (
//           <p className="mensagem-vazia">Carregando...</p>
//         ) : doacoes.length > 0 ? (
//           doacoes.map((item) => (
//             <DonationCard
//               key={item.id}
//               titulo={item.titulo}
//               descricao={item.descricao}
//               imagemUrl={item.imagemUrl}
//             />
//           ))
//         ) : (
//           <p className="mensagem-vazia">Nenhuma doação encontrada.</p>
//         )}
//       </div>

//       <Link to="/Receiver" className="arrow-button"></Link>
//     </section>
//   );
// }

// import "./Eletronics.css";
// import { useCart } from "../ShoppingCar/CartContext";
// import foneOuvido from "../../assets/images/fone.png";
// import calculadora from "../../assets/images/calculadora.png";
// import mouseImagem from "../../assets/images/mouse.png";
// import sacolaIcon from "../../assets/icons/sacolaIcon.png";
// import { useState } from "react";
// import ShoppingCart from "../ShoppingCar/ShoppingCar";
// import { Link } from "react-router-dom";

// function Eletronics() {
//   const { addToCart, isPurchased } = useCart();
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const products = [
//     {
//       id: 4,
//       name: "Fone de ouvido (Beats)",
//       description: "Som de qualidade e conforto para estudos e foco.",
//       image: foneOuvido,
//       className: "earphone",
//       pClass: "fones",
//     },
//     {
//       id: 5,
//       name: "Calculadora científica",
//       description: "Ferramenta prática para cálculos avançados em T.I. e exatas.",
//       image: calculadora,
//       className: "calculator",
//       pClass: "calculadoras",
//     },
//     {
//       id: 6,
//       name: "Mouse",
//       description: "Agilidade e precisão no uso diário do computador.",
//       image: mouseImagem,
//       className: "mouse",
//       pClass: "mouses",
//     },
//   ];

//   return (
//     <section className="eletronicsSection">
//       <div className="materialHeader">
//         <h1 className="eletronicsTitle">Aparelhos Eletrônicos</h1>
//         <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
//           <img src={sacolaIcon} alt="Sacola" className="cart-icon" />
//         </button>
//       </div>
//       <div className="eletronicsCategoria">
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
//                 Adicionar a sacola
//               </button>
//             </div>
//           ))}
//           <Link to="/Receiver" className="arrow-button"></Link>

//       </div>

//       {isCartOpen && <ShoppingCart onClose={() => setIsCartOpen(false)} />}
//     </section>
//   );
// }

// export default Eletronics;
