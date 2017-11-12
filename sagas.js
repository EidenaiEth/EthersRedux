import {
  ETHERS_NEW_WALLET_REQUEST,
  ETHERS_WALLET_CREATE_RANDOM_REQUEST,
  ETHERS_WALLET_CREATE_FROM_ENCRYPTED_REQUEST,
  ETHERS_WALLET_CREATE_FROM_MENEMONIC_REQUEST,
  ETHERS_WALLET_CREATE_FROM_BRAIN_REQUEST,
  ETHERS_WALLET_ADDRESS_REQUEST,
  ETHERS_WALLET_PRIVATE_KEY_REQUEST,
  ETHERS_WALLET_GET_ADDRESS_REQUEST,
  ETHERS_WALLET_SIGN_REQUEST,
  ETHERS_WALLET_SIGN_MESSAGE_REQUEST,
  ETHERS_WALLET_ENCRYPT_REQUEST,
  ETHERS_WALLET_GET_BALNCE_REQUEST,
  ETHERS_WALLET_GET_TRANSACTION_COUNT_REQUEST,
  ETHERS_WALLET_ESTIMATE_GAS_REQUEST,
  ETHERS_WALLET_SEND_TRANSACTION_REQUEST,
  ETHERS_WALLET_SEND_REQUEST,
  ETHERS_WALLET_PARSE_TRANSACTION_REQUEST,
  ETHERS_WALLET_VERIFY_MESSAGE_REQUEST,
  ETHERS_NEW_PROVIDER_ETHERSCAN_REQUEST,
  ETHERS_NEW_PROVIDER_JSON_RPC_REQUEST,
  ETHERS_NEW_PROVIDER_INFURA_REQUEST,
  ETHERS_NEW_PROVIDER_FALLBACK_REQUEST,
  ETHERS_GET_PROVIDER_DEFAULT_REQUEST,
  ETHERS_PROVIDER_NAME_REQUEST,
  ETHERS_PROVIDER_CHAIN_ID_REQUEST,
  ETHERS_PROVIDER_PROVIDERS_REQUEST,
  ETHERS_PROVIDER_URL_REQUEST,
  ETHERS_PROVIDER_SEND_REQUEST,
  ETHERS_PROVIDER_API_TOKEN_REQUEST,
  ETHERS_PROVIDER_API_ACCESS_TOKEN_REQUEST,
  ETHERS_ACCOUNT_GET_BALANCE_REQUEST,
  ETHERS_ACCOUNT_GET_TRANSACTION_COST_REQUEST,
  ETHERS_ACCOUNT_LOOKUP_ADDRESS_REQUEST,
  ETHERS_ACCOUNT_RESOLVE_NAME_REQUEST,
  ETHERS_BLOCKCHAIN_GET_BLOCK_NUMBER_REQUEST,
  ETHERS_BLOCKCHAIN_GET_GAS_PRICE_REQUEST,
  ETHERS_BLOCKCHAIN_GET_BLOCK_REQUEST,
  ETHERS_BLOCKCHAIN_GET_TRANSACTION_REQUEST,
  ETHERS_BLOCKCHAIN_GET_TRANSACTION_RECEIPT_REQUEST,
  ETHERS_CONTRACT_STATE_GET_CODE_REQUEST,
  ETHERS_CONTRACT_STATE_GET_STORAGE_AT_REQUEST,
  ETHERS_CONTRACT_STATE_GET_LOGS_REQUEST,
  ETHERS_EVENTS_SET_ON_REQUEST,
  ETHERS_EVENTS_SET_ONCE_REQUEST,
  ETHERS_EVENTS_REMOVE_LISTENER_REQUEST,
  ETHERS_EVENTS_REMOVE_ALL_LISTENERS_REQUEST,
  ETHERS_EVENTS_GET_LISTNER_COUNT_REQUEST,
  ETHERS_EVENT_RESET_BLOCK_REQUEST,
  ETHERS_NEW_CONTRACT_REQUEST,
  ETHERS_CONTRACT_GET_FUNCTIONS_REQUEST,
  ETHERS_CONTRACT_GET_ESTIMATE_REQUEST,
  ETHERS_CONTRACT_GET_EVENTS_REQUEST,
  ETHERS_CONTRACT_NEW_INSTANCE_REQUEST,
  ETHERS_CONTRACT_DEPLOY_BYTECODE_REQUEST,
} from './actions'
import {
  ethersNewWalletSuccess,
  ethersNewWalletFailure,
  ethersWalletCreateRandomSuccess,
  ethersWalletCreateRandomFailure,
  ethersWalletCreateFromEncryptedSuccess,
  ethersWalletCreateFromEncryptedFailure,
  ethersWalletCreateFromMenemonicSuccess,
  ethersWalletCreateFromMenemonicFailure,
  ethersWalletCreateFromBrainSuccess,
  ethersWalletCreateFromBrainFailure,
  ethersWalletAddressSuccess,
  ethersWalletAddressFailure,
  ethersWalletPrivateKeySuccess,
  ethersWalletPrivateKeyFailure,
  ethersWalletGetAddressSuccess,
  ethersWalletGetAddressFailure,
  ethersWalletSignSuccess,
  ethersWalletSignFailure,
  ethersWalletSignMessageSuccess,
  ethersWalletSignMessageFailure,
  ethersWalletEncryptSuccess,
  ethersWalletEncryptFailure,
  ethersWalletGetBalnceSuccess,
  ethersWalletGetBalnceFailure,
  ethersWalletGetTransactionCountSuccess,
  ethersWalletGetTransactionCountFailure,
  ethersWalletEstimateGasSuccess,
  ethersWalletEstimateGasFailure,
  ethersWalletSendTransactionSuccess,
  ethersWalletSendTransactionFailure,
  ethersWalletSendSuccess,
  ethersWalletSendFailure,
  ethersWalletParseTransactionSuccess,
  ethersWalletParseTransactionFailure,
  ethersWalletVerifyMessageSuccess,
  ethersWalletVerifyMessageFailure,
  ethersNewProviderEtherscanSuccess,
  ethersNewProviderEtherscanFailure,
  ethersNewProviderJsonRpcSuccess,
  ethersNewProviderJsonRpcFailure,
  ethersNewProviderInfuraSuccess,
  ethersNewProviderInfuraFailure,
  ethersNewProviderFallbackSuccess,
  ethersNewProviderFallbackFailure,
  ethersGetProviderDefaultSuccess,
  ethersGetProviderDefaultFailure,
  ethersProviderNameSuccess,
  ethersProviderNameFailure,
  ethersProviderChainIdSuccess,
  ethersProviderChainIdFailure,
  ethersProviderProvidersSuccess,
  ethersProviderProvidersFailure,
  ethersProviderUrlSuccess,
  ethersProviderUrlFailure,
  ethersProviderSendSuccess,
  ethersProviderSendFailure,
  ethersProviderApiTokenSuccess,
  ethersProviderApiTokenFailure,
  ethersProviderApiAccessTokenSuccess,
  ethersProviderApiAccessTokenFailure,
  ethersAccountGetBalanceSuccess,
  ethersAccountGetBalanceFailure,
  ethersAccountGetTransactionCostSuccess,
  ethersAccountGetTransactionCostFailure,
  ethersAccountLookupAddressSuccess,
  ethersAccountLookupAddressFailure,
  ethersAccountResolveNameSuccess,
  ethersAccountResolveNameFailure,
  ethersBlockchainGetBlockNumberSuccess,
  ethersBlockchainGetBlockNumberFailure,
  ethersBlockchainGetGasPriceSuccess,
  ethersBlockchainGetGasPriceFailure,
  ethersBlockchainGetBlockSuccess,
  ethersBlockchainGetBlockFailure,
  ethersBlockchainGetTransactionSuccess,
  ethersBlockchainGetTransactionFailure,
  ethersBlockchainGetTransactionReceiptSuccess,
  ethersBlockchainGetTransactionReceiptFailure,
  ethersContractStateGetCodeSuccess,
  ethersContractStateGetCodeFailure,
  ethersContractStateGetStorageAtSuccess,
  ethersContractStateGetStorageAtFailure,
  ethersContractStateGetLogsSuccess,
  ethersContractStateGetLogsFailure,
  ethersEventsSetOnSuccess,
  ethersEventsSetOnFailure,
  ethersEventsSetOnceSuccess,
  ethersEventsSetOnceFailure,
  ethersEventsRemoveListenerSuccess,
  ethersEventsRemoveListenerFailure,
  ethersEventsRemoveAllListenersSuccess,
  ethersEventsRemoveAllListenersFailure,
  ethersEventsGetListnerCountSuccess,
  ethersEventsGetListnerCountFailure,
  ethersEventResetBlockSuccess,
  ethersEventResetBlockFailure,
  ethersNewContractSuccess,
  ethersNewContractFailure,
  ethersContractGetFunctionsSuccess,
  ethersContractGetFunctionsFailure,
  ethersContractGetEstimateSuccess,
  ethersContractGetEstimateFailure,
  ethersContractGetEventsSuccess,
  ethersContractGetEventsFailure,
  ethersContractNewInstanceSuccess,
  ethersContractNewInstanceFailure,
  ethersContractDeployBytecodeSuccess,
  ethersContractDeployBytecodeFailure,
} from './actions'

/*---*--- New Wallet ---*---*/
function* newWallet({payload, metadata}) {
  try {

    yield put(ethersNewWalletSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersNewWalletFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Create Random ---*---*/
function* walletCreateRandom({payload, metadata}) {
  try {

    yield put(ethersWalletCreateRandomSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletCreateRandomFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Create From Encrypted ---*---*/
function* walletCreateFromEncrypted({payload, metadata}) {
  try {

    yield put(ethersWalletCreateFromEncryptedSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletCreateFromEncryptedFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Create From Menemonic ---*---*/
function* walletCreateFromMenemonic({payload, metadata}) {
  try {

    yield put(ethersWalletCreateFromMenemonicSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletCreateFromMenemonicFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Create From Brain ---*---*/
function* walletCreateFromBrain({payload, metadata}) {
  try {

    yield put(ethersWalletCreateFromBrainSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletCreateFromBrainFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Address ---*---*/
function* walletAddress({payload, metadata}) {
  try {

    yield put(ethersWalletAddressSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletAddressFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Private Key ---*---*/
function* walletPrivateKey({payload, metadata}) {
  try {

    yield put(ethersWalletPrivateKeySuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletPrivateKeyFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Get Address ---*---*/
function* walletGetAddress({payload, metadata}) {
  try {

    yield put(ethersWalletGetAddressSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletGetAddressFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Sign ---*---*/
function* walletSign({payload, metadata}) {
  try {

    yield put(ethersWalletSignSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletSignFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Sign Message ---*---*/
function* walletSignMessage({payload, metadata}) {
  try {

    yield put(ethersWalletSignMessageSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletSignMessageFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Encrypt ---*---*/
function* walletEncrypt({payload, metadata}) {
  try {

    yield put(ethersWalletEncryptSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletEncryptFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Get Balnce ---*---*/
function* walletGetBalnce({payload, metadata}) {
  try {

    yield put(ethersWalletGetBalnceSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletGetBalnceFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Get Transaction Count ---*---*/
function* walletGetTransactionCount({payload, metadata}) {
  try {

    yield put(ethersWalletGetTransactionCountSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletGetTransactionCountFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Estimate Gas ---*---*/
function* walletEstimateGas({payload, metadata}) {
  try {

    yield put(ethersWalletEstimateGasSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletEstimateGasFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Send Transaction ---*---*/
function* walletSendTransaction({payload, metadata}) {
  try {

    yield put(ethersWalletSendTransactionSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletSendTransactionFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Send ---*---*/
function* walletSend({payload, metadata}) {
  try {

    yield put(ethersWalletSendSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletSendFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Parse Transaction ---*---*/
function* walletParseTransaction({payload, metadata}) {
  try {

    yield put(ethersWalletParseTransactionSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletParseTransactionFailure({payload: e, metadata}))
  }
}


/*---*--- Wallet Verify Message ---*---*/
function* walletVerifyMessage({payload, metadata}) {
  try {

    yield put(ethersWalletVerifyMessageSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersWalletVerifyMessageFailure({payload: e, metadata}))
  }
}


/*---*--- New Provider Etherscan ---*---*/
function* newProviderEtherscan({payload, metadata}) {
  try {

    yield put(ethersNewProviderEtherscanSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersNewProviderEtherscanFailure({payload: e, metadata}))
  }
}


/*---*--- New Provider Json Rpc ---*---*/
function* newProviderJsonRpc({payload, metadata}) {
  try {

    yield put(ethersNewProviderJsonRpcSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersNewProviderJsonRpcFailure({payload: e, metadata}))
  }
}


/*---*--- New Provider Infura ---*---*/
function* newProviderInfura({payload, metadata}) {
  try {

    yield put(ethersNewProviderInfuraSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersNewProviderInfuraFailure({payload: e, metadata}))
  }
}


/*---*--- New Provider Fallback ---*---*/
function* newProviderFallback({payload, metadata}) {
  try {

    yield put(ethersNewProviderFallbackSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersNewProviderFallbackFailure({payload: e, metadata}))
  }
}


/*---*--- Get Provider Default ---*---*/
function* getProviderDefault({payload, metadata}) {
  try {

    yield put(ethersGetProviderDefaultSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersGetProviderDefaultFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Name ---*---*/
function* providerName({payload, metadata}) {
  try {

    yield put(ethersProviderNameSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderNameFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Chain Id ---*---*/
function* providerChainId({payload, metadata}) {
  try {

    yield put(ethersProviderChainIdSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderChainIdFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Providers ---*---*/
function* providerProviders({payload, metadata}) {
  try {

    yield put(ethersProviderProvidersSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderProvidersFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Url ---*---*/
function* providerUrl({payload, metadata}) {
  try {

    yield put(ethersProviderUrlSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderUrlFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Send ---*---*/
function* providerSend({payload, metadata}) {
  try {

    yield put(ethersProviderSendSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderSendFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Api Token ---*---*/
function* providerApiToken({payload, metadata}) {
  try {

    yield put(ethersProviderApiTokenSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderApiTokenFailure({payload: e, metadata}))
  }
}


/*---*--- Provider Api Access Token ---*---*/
function* providerApiAccessToken({payload, metadata}) {
  try {

    yield put(ethersProviderApiAccessTokenSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersProviderApiAccessTokenFailure({payload: e, metadata}))
  }
}


/*---*--- Account Get Balance ---*---*/
function* accountGetBalance({payload, metadata}) {
  try {

    yield put(ethersAccountGetBalanceSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersAccountGetBalanceFailure({payload: e, metadata}))
  }
}


/*---*--- Account Get Transaction Cost ---*---*/
function* accountGetTransactionCost({payload, metadata}) {
  try {

    yield put(ethersAccountGetTransactionCostSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersAccountGetTransactionCostFailure({payload: e, metadata}))
  }
}


/*---*--- Account Lookup Address ---*---*/
function* accountLookupAddress({payload, metadata}) {
  try {

    yield put(ethersAccountLookupAddressSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersAccountLookupAddressFailure({payload: e, metadata}))
  }
}


/*---*--- Account Resolve Name ---*---*/
function* accountResolveName({payload, metadata}) {
  try {

    yield put(ethersAccountResolveNameSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersAccountResolveNameFailure({payload: e, metadata}))
  }
}


/*---*--- Blockchain Get Block Number ---*---*/
function* blockchainGetBlockNumber({payload, metadata}) {
  try {

    yield put(ethersBlockchainGetBlockNumberSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersBlockchainGetBlockNumberFailure({payload: e, metadata}))
  }
}


/*---*--- Blockchain Get Gas Price ---*---*/
function* blockchainGetGasPrice({payload, metadata}) {
  try {

    yield put(ethersBlockchainGetGasPriceSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersBlockchainGetGasPriceFailure({payload: e, metadata}))
  }
}


/*---*--- Blockchain Get Block ---*---*/
function* blockchainGetBlock({payload, metadata}) {
  try {

    yield put(ethersBlockchainGetBlockSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersBlockchainGetBlockFailure({payload: e, metadata}))
  }
}


/*---*--- Blockchain Get Transaction ---*---*/
function* blockchainGetTransaction({payload, metadata}) {
  try {

    yield put(ethersBlockchainGetTransactionSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersBlockchainGetTransactionFailure({payload: e, metadata}))
  }
}


/*---*--- Blockchain Get Transaction Receipt ---*---*/
function* blockchainGetTransactionReceipt({payload, metadata}) {
  try {

    yield put(ethersBlockchainGetTransactionReceiptSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersBlockchainGetTransactionReceiptFailure({payload: e, metadata}))
  }
}


/*---*--- Contract State Get Code ---*---*/
function* contractStateGetCode({payload, metadata}) {
  try {

    yield put(ethersContractStateGetCodeSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractStateGetCodeFailure({payload: e, metadata}))
  }
}


/*---*--- Contract State Get Storage At ---*---*/
function* contractStateGetStorageAt({payload, metadata}) {
  try {

    yield put(ethersContractStateGetStorageAtSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractStateGetStorageAtFailure({payload: e, metadata}))
  }
}


/*---*--- Contract State Get Logs ---*---*/
function* contractStateGetLogs({payload, metadata}) {
  try {

    yield put(ethersContractStateGetLogsSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractStateGetLogsFailure({payload: e, metadata}))
  }
}


/*---*--- Events Set On ---*---*/
function* eventsSetOn({payload, metadata}) {
  try {

    yield put(ethersEventsSetOnSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEventsSetOnFailure({payload: e, metadata}))
  }
}


/*---*--- Events Set Once ---*---*/
function* eventsSetOnce({payload, metadata}) {
  try {

    yield put(ethersEventsSetOnceSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEventsSetOnceFailure({payload: e, metadata}))
  }
}


/*---*--- Events Remove Listener ---*---*/
function* eventsRemoveListener({payload, metadata}) {
  try {

    yield put(ethersEventsRemoveListenerSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEventsRemoveListenerFailure({payload: e, metadata}))
  }
}


/*---*--- Events Remove All Listeners ---*---*/
function* eventsRemoveAllListeners({payload, metadata}) {
  try {

    yield put(ethersEventsRemoveAllListenersSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEventsRemoveAllListenersFailure({payload: e, metadata}))
  }
}


/*---*--- Events Get Listner Count ---*---*/
function* eventsGetListnerCount({payload, metadata}) {
  try {

    yield put(ethersEventsGetListnerCountSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEventsGetListnerCountFailure({payload: e, metadata}))
  }
}


/*---*--- Event Reset Block ---*---*/
function* eventResetBlock({payload, metadata}) {
  try {

    yield put(ethersEventResetBlockSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersEventResetBlockFailure({payload: e, metadata}))
  }
}


/*---*--- New Contract ---*---*/
function* newContract({payload, metadata}) {
  try {

    yield put(ethersNewContractSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersNewContractFailure({payload: e, metadata}))
  }
}


/*---*--- Contract Get Functions ---*---*/
function* contractGetFunctions({payload, metadata}) {
  try {

    yield put(ethersContractGetFunctionsSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractGetFunctionsFailure({payload: e, metadata}))
  }
}


/*---*--- Contract Get Estimate ---*---*/
function* contractGetEstimate({payload, metadata}) {
  try {

    yield put(ethersContractGetEstimateSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractGetEstimateFailure({payload: e, metadata}))
  }
}


/*---*--- Contract Get Events ---*---*/
function* contractGetEvents({payload, metadata}) {
  try {

    yield put(ethersContractGetEventsSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractGetEventsFailure({payload: e, metadata}))
  }
}


/*---*--- Contract New Instance ---*---*/
function* contractNewInstance({payload, metadata}) {
  try {

    yield put(ethersContractNewInstanceSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractNewInstanceFailure({payload: e, metadata}))
  }
}


/*---*--- Contract Deploy Bytecode ---*---*/
function* contractDeployBytecode({payload, metadata}) {
  try {

    yield put(ethersContractDeployBytecodeSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(ethersContractDeployBytecodeFailure({payload: e, metadata}))
  }
}

export default function* rxdbRootSaga() {
  yield [
   takeEvery(ETHERS_NEW_WALLET_REQUEST, newWallet),
   takeEvery(ETHERS_WALLET_CREATE_RANDOM_REQUEST, walletCreateRandom),
   takeEvery(ETHERS_WALLET_CREATE_FROM_ENCRYPTED_REQUEST, walletCreateFromEncrypted),
   takeEvery(ETHERS_WALLET_CREATE_FROM_MENEMONIC_REQUEST, walletCreateFromMenemonic),
   takeEvery(ETHERS_WALLET_CREATE_FROM_BRAIN_REQUEST, walletCreateFromBrain),
   takeEvery(ETHERS_WALLET_ADDRESS_REQUEST, walletAddress),
   takeEvery(ETHERS_WALLET_PRIVATE_KEY_REQUEST, walletPrivateKey),
   takeEvery(ETHERS_WALLET_GET_ADDRESS_REQUEST, walletGetAddress),
   takeEvery(ETHERS_WALLET_SIGN_REQUEST, walletSign),
   takeEvery(ETHERS_WALLET_SIGN_MESSAGE_REQUEST, walletSignMessage),
   takeEvery(ETHERS_WALLET_ENCRYPT_REQUEST, walletEncrypt),
   takeEvery(ETHERS_WALLET_GET_BALNCE_REQUEST, walletGetBalnce),
   takeEvery(ETHERS_WALLET_GET_TRANSACTION_COUNT_REQUEST, walletGetTransactionCount),
   takeEvery(ETHERS_WALLET_ESTIMATE_GAS_REQUEST, walletEstimateGas),
   takeEvery(ETHERS_WALLET_SEND_TRANSACTION_REQUEST, walletSendTransaction),
   takeEvery(ETHERS_WALLET_SEND_REQUEST, walletSend),
   takeEvery(ETHERS_WALLET_PARSE_TRANSACTION_REQUEST, walletParseTransaction),
   takeEvery(ETHERS_WALLET_VERIFY_MESSAGE_REQUEST, walletVerifyMessage),
   takeEvery(ETHERS_NEW_PROVIDER_ETHERSCAN_REQUEST, newProviderEtherscan),
   takeEvery(ETHERS_NEW_PROVIDER_JSON_RPC_REQUEST, newProviderJsonRpc),
   takeEvery(ETHERS_NEW_PROVIDER_INFURA_REQUEST, newProviderInfura),
   takeEvery(ETHERS_NEW_PROVIDER_FALLBACK_REQUEST, newProviderFallback),
   takeEvery(ETHERS_GET_PROVIDER_DEFAULT_REQUEST, getProviderDefault),
   takeEvery(ETHERS_PROVIDER_NAME_REQUEST, providerName),
   takeEvery(ETHERS_PROVIDER_CHAIN_ID_REQUEST, providerChainId),
   takeEvery(ETHERS_PROVIDER_PROVIDERS_REQUEST, providerProviders),
   takeEvery(ETHERS_PROVIDER_URL_REQUEST, providerUrl),
   takeEvery(ETHERS_PROVIDER_SEND_REQUEST, providerSend),
   takeEvery(ETHERS_PROVIDER_API_TOKEN_REQUEST, providerApiToken),
   takeEvery(ETHERS_PROVIDER_API_ACCESS_TOKEN_REQUEST, providerApiAccessToken),
   takeEvery(ETHERS_ACCOUNT_GET_BALANCE_REQUEST, accountGetBalance),
   takeEvery(ETHERS_ACCOUNT_GET_TRANSACTION_COST_REQUEST, accountGetTransactionCost),
   takeEvery(ETHERS_ACCOUNT_LOOKUP_ADDRESS_REQUEST, accountLookupAddress),
   takeEvery(ETHERS_ACCOUNT_RESOLVE_NAME_REQUEST, accountResolveName),
   takeEvery(ETHERS_BLOCKCHAIN_GET_BLOCK_NUMBER_REQUEST, blockchainGetBlockNumber),
   takeEvery(ETHERS_BLOCKCHAIN_GET_GAS_PRICE_REQUEST, blockchainGetGasPrice),
   takeEvery(ETHERS_BLOCKCHAIN_GET_BLOCK_REQUEST, blockchainGetBlock),
   takeEvery(ETHERS_BLOCKCHAIN_GET_TRANSACTION_REQUEST, blockchainGetTransaction),
   takeEvery(ETHERS_BLOCKCHAIN_GET_TRANSACTION_RECEIPT_REQUEST, blockchainGetTransactionReceipt),
   takeEvery(ETHERS_CONTRACT_STATE_GET_CODE_REQUEST, contractStateGetCode),
   takeEvery(ETHERS_CONTRACT_STATE_GET_STORAGE_AT_REQUEST, contractStateGetStorageAt),
   takeEvery(ETHERS_CONTRACT_STATE_GET_LOGS_REQUEST, contractStateGetLogs),
   takeEvery(ETHERS_EVENTS_SET_ON_REQUEST, eventsSetOn),
   takeEvery(ETHERS_EVENTS_SET_ONCE_REQUEST, eventsSetOnce),
   takeEvery(ETHERS_EVENTS_REMOVE_LISTENER_REQUEST, eventsRemoveListener),
   takeEvery(ETHERS_EVENTS_REMOVE_ALL_LISTENERS_REQUEST, eventsRemoveAllListeners),
   takeEvery(ETHERS_EVENTS_GET_LISTNER_COUNT_REQUEST, eventsGetListnerCount),
   takeEvery(ETHERS_EVENT_RESET_BLOCK_REQUEST, eventResetBlock),
   takeEvery(ETHERS_NEW_CONTRACT_REQUEST, newContract),
   takeEvery(ETHERS_CONTRACT_GET_FUNCTIONS_REQUEST, contractGetFunctions),
   takeEvery(ETHERS_CONTRACT_GET_ESTIMATE_REQUEST, contractGetEstimate),
   takeEvery(ETHERS_CONTRACT_GET_EVENTS_REQUEST, contractGetEvents),
   takeEvery(ETHERS_CONTRACT_NEW_INSTANCE_REQUEST, contractNewInstance),
   takeEvery(ETHERS_CONTRACT_DEPLOY_BYTECODE_REQUEST, contractDeployBytecode),
  ];
}