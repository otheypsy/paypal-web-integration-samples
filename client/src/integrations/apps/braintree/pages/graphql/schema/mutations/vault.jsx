import gql from "graphql-tag.macro";

const _creditCard = {
    query: gql`
        mutation VaultCreditCard($input: VaultCreditCardInput!, $hasVerifyDetails: Boolean!) {
            vaultCreditCard(input: $input) {
                clientMutationId
                paymentMethod {
                    id
                    legacyId
                    usage
                }
                ...verficationFields @include(if: $hasVerifyDetails)
            }
        }

        fragment verficationFields on Verification {
            id
            legacyId
            status
        }
    `,
    variables: {
        input: {
            clientMutationId: Date.now().toString(),
            paymentMethodId: 'fake-valid-nonce',
            customerId: 'Y3VzdG9tZXJfMjYwODM3NTA0',
            billingAddress: {
                firstName: 'Jill',
                lastName: 'Doe',
                streetAddress: '555 Smith St.',
                extendedAddress: '#5',
                locality: 'Oakland',
                region: 'CA',
                postalCode: '12345',
                countryCode: 'USA',
            }
        },
        hasVerifyDetails: true
    }
};

export default {
    creditCard: _creditCard
}
