import { AzureFunction, Context, HttpRequest } from '@azure/functions'

import helloworld1 from '../Shared/sample1'
import helloworld2 from '../Shared/sample2'

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const check = helloworld1(1, 2)
  context.log(`Return Value from Sample1 (1 + 3) = ${check}`)

  const check2 = helloworld2(10, 1)
  context.log(`Return Value from Sample2 (10 - 1) = ${check2}`)

  context.log('HTTP trigger function processed a request.')
  const name = req.query.name || (req.body && req.body.name)
  const responseMessage = name
    ? 'Hello, ' + name + '. This HTTP triggered function executed successfully.'
    : 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.'

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage
  }
}

export default httpTrigger
