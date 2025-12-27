import { createClient } from '../../utils/supabase/server';
import { Navbar } from '../../components/Navbar';
import OrderBook from '../../components/trade/OrderBook';
import TradingChart from '../../components/trade/TradingChart';
import TradeHistory from '../../components/trade/TradeHistory';
import OrderForm from '../../components/trade/OrderForm';

export default async function TradePage() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  const session = data.session;

  return (
    <div className="min-h-screen">
      <Navbar session={!!session} />

      <main className="max-w-7xl mx-auto p-4 h-[calc(100vh-64px)]">
        <div className="grid grid-cols-12 gap-4 h-full">
          <aside className="col-span-3 card-glass rounded-md overflow-auto">
            <OrderBook />
          </aside>

          <section className="col-span-6 grid grid-rows-2 gap-4">
            <div className="card-glass rounded-md p-4">
              <TradingChart />
            </div>
            <div className="card-glass rounded-md p-4 overflow-auto">
              <TradeHistory />
            </div>
          </section>

          <aside className="col-span-3 card-glass rounded-md overflow-auto">
            <OrderForm />
          </aside>
        </div>
      </main>
    </div>
  );
}
