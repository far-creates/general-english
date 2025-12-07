import { Router, Request, Response } from "express";
import * as testService from "../services/test.service";

const router = Router();

// Get all tests
router.get("/tests", (req: Request, res: Response) => {
  const result = testService.getAllTests();
  res.json(result);
});

// Get test by ID
router.get("/tests/:testId", (req: Request, res: Response) => {
  const result = testService.getTestById(req.params.testId);

  if (result.success) {
    res.json(result);
  } else {
    res.status(404).json(result);
  }
});

// Get tests by year and series
router.get(
  "/tests/year/:year/series/:series",
  (req: Request, res: Response) => {
    const year = parseInt(req.params.year);
    const series = parseInt(req.params.series);

    const result = testService.getTestsByYearAndSeries(year, series);
    res.json(result);
  }
);

export default router;
