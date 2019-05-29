// import { DynamoDB, CognitoIdentityServiceProvider } from 'aws-sdk'
import { CognitoIdentityServiceProvider } from 'aws-sdk'
// import { userIdToMobileUserId } from '../libs/utils'
import { AmiboAppSyncHandler } from '../libs/types'

const usrPoolId: string = 'ap-northeast-1_iH1FAARf3'

const cisp = new CognitoIdentityServiceProvider()
// const dynamodb = new DynamoDB.DocumentClient()
// const amiboTable = process.env.amiboTable
// const amiboUserPoolId = process.env.amiboUserPoolId
const amiboUserPoolId = usrPoolId

export const handler: AmiboAppSyncHandler = async event => {
    const {
        args: { phone },
    } = event

    const params = {
        UserPoolId: amiboUserPoolId,
        Filter: `phone_number = \"${phone}\"`,
    }

    const { Users } = await cisp.listUsers(params).promise()

    const mobileUsers = Users.filter(({ Attributes }) =>
        Attributes.find(
            // attr => attr.Name === 'custom:userType' && attr.Value === 'mobile'
            attr => attr.Name === 'email' && attr.Value !== ''
        )
    )
    // const userName = Users.filter(({ Username }) => Username.length !== 0)

    if (mobileUsers.length === 0) {
        throw new Error('Mobile user not found')
    }

    const { Attributes } = mobileUsers[0]
    const { Value: userId } = Attributes.find(({ Name }) => Name === 'sub')
    // const { Value: userName } = Attributes.find(({ Name }) => Name === 'email')
    const { Value: userEmail } = Attributes.find(({ Name }) => Name === 'email')

    // return getMobileUserByUserId(userId)
    return {
        id: userId,
        name: mobileUsers[0].Username,
        email: userEmail,
    }
}
