. import { useEffect, useState } from "react
";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

export default function Dashboard() {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Simulate data fetch
    setSalesData([
      { month: "Jan", sales: 12000, price: 5.1 },
      { month: "Feb", sales: 15000, price: 5.0 },
      { month: "Mar", sales: 11000, price: 4.9 },
      { month: "Apr", sales: 18000, price: 5.2 },
      { month: "May", sales: 14000, price: 5.3 },
      { month: "Jun", sales: 16000, price: 5.4 },
    ]);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-2">מכירות לפי חודשים</h2>
          <BarChart width={500} height={300} data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" name="מכירות בש"ח" />
          </BarChart>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-2">מגמת תמחור חודשי</h2>
          <LineChart width={500} height={300} data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[4.5, 5.5]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#82ca9d" name="מחיר ממוצע למוצר" />
          </LineChart>
        </CardContent>
      </Card>
    </div>
  );
}
