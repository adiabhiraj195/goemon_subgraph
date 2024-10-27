import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  IntentCanceled as IntentCanceledEvent,
  IntentCreated as IntentCreatedEvent,
  IntentExecuted as IntentExecutedEvent,
  PermitTransfer as PermitTransferEvent
} from "../generated/Goemon/Goemon"
import {
  IntentCanceled,
  IntentCreated,
  IntentExecuted,
  PermitTransfer
} from "../generated/schema"

export function handleIntentCanceled(event: IntentCanceledEvent): void {
  let entity = IntentCanceled.load(
    getIntentIdFromEventParams(event.params.intentIndex, event.params.user)
  );

  if (!entity) {
    entity = new IntentCanceled(
      getIntentIdFromEventParams(event.params.intentIndex, event.params.user)
    )
  }

  entity.user = event.params.user
  entity.intentIndex = event.params.intentIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIntentCreated(event: IntentCreatedEvent): void {
  let entity = IntentCreated.load(
    getIntentIdFromEventParams(event.params.intentIndex, event.params.user)
  )
  if (!entity) {
    entity = new IntentCreated(
      getIntentIdFromEventParams(event.params.intentIndex, event.params.user)
    )
  }
  entity.user = event.params.user
  entity.intentIndex = event.params.intentIndex
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.frequency = event.params.frequency

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIntentExecuted(event: IntentExecutedEvent): void {
  let entity = IntentExecuted.load(
    getIntentIdFromEventParams(event.params.intentIndex, event.params.user)
  )
  if (!entity) {
    entity = new IntentExecuted(
      getIntentIdFromEventParams(event.params.intentIndex, event.params.user)
    )
  }
  entity.user = event.params.user
  entity.intentIndex = event.params.intentIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePermitTransfer(event: PermitTransferEvent): void {
  let entity = PermitTransfer.load(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  if (!entity) {
    entity = new PermitTransfer(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
  }
  entity.token = event.params.token
  entity.owner = event.params.owner
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

function getIntentIdFromEventParams(intentIndex: BigInt, user: Address): string {
  return intentIndex.toString() + user.toHexString()
}