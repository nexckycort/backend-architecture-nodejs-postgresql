import colors from 'colors'

import TestModel from 'models/test/test.model'
import Logger from 'helpers/logger'

export default class TestService {
  private static instance: TestService
  private readonly testModel!: TestModel
  private constructor() {
    this.testModel = TestModel.getInstance()
  }

  public static getInstance(): TestService {
    if (TestService.instance === undefined) {
      TestService.instance = new TestService()
    }
    return TestService.instance
  }

  test = async (test: number): Promise<string> => {
    try {
      const result = await this.testModel.test(test)
      const resp = `1 + ${test} es ${result}`
      return resp
    } catch (error) {
      Logger.error(colors.red('Error TestService test '), error)
      throw new Error('TECHNICAL ERROR')
    }
  }
}
