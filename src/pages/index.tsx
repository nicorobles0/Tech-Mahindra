import { WithPrivateRoute } from "src/core/guards/validateSessionContext";

export default function Home() {
  return (
      <WithPrivateRoute>
      </WithPrivateRoute>
  );
}
