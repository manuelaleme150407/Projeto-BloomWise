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

  const fetchDoacoes = async () => {
    try {
      const res = await api.get("/doacao/");
      console.log("🟢 Resposta do backend:", res.data);

      const lista = res.data.filter(
        (d: Doacao) =>
          (d.categoria || "").toString().trim().toLowerCase() ===
          "aparelhos eletrônicos"
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
    <section className="eletronicsSection">
      <div className="electronicsHeader">
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
