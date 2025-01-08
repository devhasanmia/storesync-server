import { RequestHandler } from "express";
import Unit from "../../modules/units/unit.model";

export const unitSeed: RequestHandler = async (req, res) => {
  const units = [
    { name: "Piece" },
    { name: "Set" },
    { name: "Dozen" },
    { name: "Pack" },
    { name: "Box" }
  ];

  const existingUnits = await Unit.find({
    name: { $in: units.map(u => u.name) }
  });

  if (existingUnits.length > 0) {
    res.status(409).json({
      status: false,
      message: "Default Units Already Exist."
    });
    return;
  }

  const insertedUnits = await Unit.insertMany(units);
  res.status(201).json({
    status: true,
    message: "Default Units Imported Successfully",
    data: insertedUnits
  });
  return;
};
