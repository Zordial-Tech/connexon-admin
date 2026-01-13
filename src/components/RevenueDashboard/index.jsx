// index.jsx
import React, { useState } from "react";
import {
  Wrapper,
  Header,
  SummaryGrid,
  SummaryCard,
  ChartsGrid,
  Card,
  Table,
  GradientText
} from "./style";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

// ---------------- STATIC DATA ----------------
const SUMMARY = {
  totalRevenue: 1245000,
  mrr: 245000,
  activeSubscriptions: 320,
  churnRate: 3.2,
};

const REVENUE_TREND = [
  { month: "Jan", revenue: 180000 },
  { month: "Feb", revenue: 210000 },
  { month: "Mar", revenue: 245000 },
  { month: "Apr", revenue: 290000 },
  { month: "May", revenue: 320000 },
];

const REVENUE_BY_PLAN = [
  { plan: "Free", revenue: 0 },
  { plan: "Basic", revenue: 320000 },
  { plan: "Pro", revenue: 680000 },
  { plan: "Enterprise", revenue: 245000 },
];

const USERS_BY_PLAN = [
  { plan: "Free", users: 600 },
  { plan: "Basic", users: 250 },
  { plan: "Pro", users: 120 },
  { plan: "Enterprise", users: 30 },
];

const RevenueDashboard = () => {
  const [range, setRange] = useState("30d");

  return (
    <Wrapper>
      <Header>
        <div>
          <GradientText>Revenue & Analytics</GradientText>
          <p>Business performance overview</p>
        </div>
        <select value={range} onChange={(e) => setRange(e.target.value)}>
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="6m">Last 6 Months</option>
        </select>
      </Header>

      {/* Summary Cards */}
      <SummaryGrid>
        <SummaryCard accent>
          <span>Total Revenue</span>
          <h3>₹{SUMMARY.totalRevenue.toLocaleString()}</h3>
        </SummaryCard>
        <SummaryCard>
          <span>MRR</span>
          <h3>₹{SUMMARY.mrr.toLocaleString()}</h3>
        </SummaryCard>
        <SummaryCard>
          <span>Active Subscriptions</span>
          <h3>{SUMMARY.activeSubscriptions}</h3>
        </SummaryCard>
        <SummaryCard danger>
          <span>Churn Rate</span>
          <h3>{SUMMARY.churnRate}%</h3>
        </SummaryCard>
      </SummaryGrid>

      {/* Charts */}
      <ChartsGrid>
        <Card>
          <h4>Revenue Trend</h4>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={REVENUE_TREND}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#7f5af0"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h4>Revenue by Plan</h4>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={REVENUE_BY_PLAN}>
              <XAxis dataKey="plan" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#7f5af0" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </ChartsGrid>

      {/* User Distribution */}
      <Card>
        <h4>User Distribution by Plan</h4>
        <Table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Users</th>
            </tr>
          </thead>
          <tbody>
            {USERS_BY_PLAN.map((item) => (
              <tr key={item.plan}>
                <td>{item.plan}</td>
                <td>{item.users}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Wrapper>
  );
};

export default RevenueDashboard;


