const { getDepots } = require("../service/depot.service");
const { getVehicles } = require("../service/vehicle.service");
const { optimizeTasks } = require("../service/knapsack.service");

async function schedule(req, res) {

  try {

    const token = process.env.ACCESS_TOKEN;

    console.log("Token first 20 chars:");
    console.log(token?.substring(0, 20));
    const depots = await getDepots(token);

    const vehicles = await getVehicles(token);

    const result = depots.map(depot => {

      const optimized = optimizeTasks(
        vehicles,
        depot.MechanicHours
      );

      return {
        depotId: depot.ID,
        totalImpact: optimized.maxImpact,
        tasks: optimized.selectedTasks.map(
          t => t.TaskID
        )
      };
    });

    res.status(200).json(result);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }
}

module.exports = { schedule };