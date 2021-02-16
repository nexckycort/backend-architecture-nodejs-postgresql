import { pool } from 'loaders/pgPool'

export default class TestModel {
  private static instance: TestModel
  private constructor() {}

  public static getInstance(): TestModel {
    if (TestModel.instance === undefined) {
      TestModel.instance = new TestModel()
    }
    return TestModel.instance
  }

  test = async (test: number): Promise<number> => {
    const { rows } = await pool.query('SELECT $1 + 1 test', [test])
    return rows[0].test
  }
}
