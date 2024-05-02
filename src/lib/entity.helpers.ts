interface Entity {
  id: string;
}

export function addEntity(entities: Entity[], entity: Entity): Entity[] {
  return [...entities, { ...entity }];
}

export function updateEntityByKey(
  entity: Entity,
  key: string,
  slice: unknown
): Entity {
  return { ...entity, [key]: slice };
}

export function updateEntities(entities: Entity[], itemToUpdate: Entity) {
  return entities.map((item: Entity) => {
    if (isEntityIdEqual(item, itemToUpdate)) {
      return {
        ...item,
        ...itemToUpdate,
      };
    }

    return item;
  });
}

export function isEntityIdEqual(entity1: Entity, entity2: Entity): boolean {
  return entity1.id === entity2.id;
}

export function findEntityById(entities: Entity[], id: string): Entity | undefined {
  return entities.find((item) => item.id === id);
}
