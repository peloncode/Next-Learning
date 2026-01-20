import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "Contadoor",
  description: "Contadoor",
};

const page = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-3xl font-bold text-gray-800">Contador de producto</h1>
      <CartCounter value={20} />
    </div>
  );
};

export default page;
