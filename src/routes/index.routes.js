import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Hola a todos",
  });
});

export default router;
