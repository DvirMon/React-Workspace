export function addEntity<Entity extends { id: string }>(
  entities: Entity[],
  entity: Entity
): Entity[] {
  return [...entities, { ...entity }];
}

export function updateEntityByKey<Entity extends { id: string }>(
  entity: Entity,
  key: string,
  slice: unknown
): Entity {
  return { ...entity, [key]: slice };
}

export function updateEntities<Entity extends { id: string }>(
  entities: Entity[],
  itemToUpdate: Entity
) {
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

export function isEntityIdEqual<Entity extends { id: string }>(
  entity1: Entity,
  entity2: Entity
): boolean {
  return entity1.id === entity2.id;
}

export function findEntityById<Entity extends { id: string }>(
  entities: Entity[],
  id: string
): Entity | undefined {
  return entities.find((item) => item.id === id);
}

export function deleteEntityById<Entity extends { id: string }>(
  items: Entity[],
  id: string
): Entity[] {
  const indexToDelete = items.findIndex((item) => item.id === id);

  if (indexToDelete < 0) {
    return items;
  }

  return deleteEntityByIndex(items, indexToDelete);
}

export function deleteEntityByIndex<T>(items: T[], indexToDelete: number): T[] {
  items.splice(indexToDelete, 1);
  return [...items];
}
