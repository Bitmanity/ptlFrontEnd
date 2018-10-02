import { InventoryMasterModule } from './inventory-master.module';

describe('InventoryMasterModule', () => {
  let inventoryMasterModule: InventoryMasterModule;

  beforeEach(() => {
    inventoryMasterModule = new InventoryMasterModule();
  });

  it('should create an instance', () => {
    expect(inventoryMasterModule).toBeTruthy();
  });
});
