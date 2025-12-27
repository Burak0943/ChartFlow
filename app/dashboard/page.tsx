import { createClient } from '../../utils/supabase/server';
import { Navbar } from '../../components/Navbar';

export default async function DashboardPage() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  const session = data.session;

  if (!session) {
    return (
      <div className="center-screen">
        <div className="card-glass p-8 rounded-xl text-center">
          <h3 className="text-lg font-semibold">Not signed in</h3>
          <p className="text-gray-400 mt-2">Please <a href="/login" className="text-blue-400">sign in</a> to view your dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar session={!!session} />

      <main className="max-w-6xl mx-auto p-4">
        <div className="card-glass p-6 rounded-md">
          <h3 className="text-lg font-semibold">Wallet Balance</h3>
          <div className="text-3xl font-bold mt-4">$10,000.00</div>
        </div>

        <div className="mt-6 card-glass p-4 rounded-md">
          <h4 className="font-semibold">Open Positions</h4>
          <div className="mt-4 overflow-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-gray-400">
                <tr>
                  <th>Symbol</th>
                  <th>Size</th>
                  <th>Entry</th>
                  <th>P&L</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BTC/USD</td>
                  <td>0.1</td>
                  <td>$45,000</td>
                  <td className="text-green-400">+$120</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
