import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  IntentCanceled,
  IntentCreated,
  IntentExecuted,
  PermitTransfer
} from "../generated/Goemon/Goemon"

export function createIntentCanceledEvent(
  user: Address,
  intentIndex: BigInt
): IntentCanceled {
  let intentCanceledEvent = changetype<IntentCanceled>(newMockEvent())

  intentCanceledEvent.parameters = new Array()

  intentCanceledEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  intentCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "intentIndex",
      ethereum.Value.fromUnsignedBigInt(intentIndex)
    )
  )

  return intentCanceledEvent
}

export function createIntentCreatedEvent(
  user: Address,
  intentIndex: BigInt,
  recipient: Address,
  amount: BigInt,
  frequency: BigInt
): IntentCreated {
  let intentCreatedEvent = changetype<IntentCreated>(newMockEvent())

  intentCreatedEvent.parameters = new Array()

  intentCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  intentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "intentIndex",
      ethereum.Value.fromUnsignedBigInt(intentIndex)
    )
  )
  intentCreatedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  intentCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  intentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "frequency",
      ethereum.Value.fromUnsignedBigInt(frequency)
    )
  )

  return intentCreatedEvent
}

export function createIntentExecutedEvent(
  user: Address,
  intentIndex: BigInt
): IntentExecuted {
  let intentExecutedEvent = changetype<IntentExecuted>(newMockEvent())

  intentExecutedEvent.parameters = new Array()

  intentExecutedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  intentExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "intentIndex",
      ethereum.Value.fromUnsignedBigInt(intentIndex)
    )
  )

  return intentExecutedEvent
}

export function createPermitTransferEvent(
  token: Address,
  owner: Address,
  receiver: Address,
  amount: BigInt
): PermitTransfer {
  let permitTransferEvent = changetype<PermitTransfer>(newMockEvent())

  permitTransferEvent.parameters = new Array()

  permitTransferEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  permitTransferEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  permitTransferEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  permitTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return permitTransferEvent
}
