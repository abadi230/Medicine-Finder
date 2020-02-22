class CreateDrugPharmacies < ActiveRecord::Migration[6.0]
  def change
    create_table :drug_pharmacies do |t|
      t.integer :drug
      t.integer :pharmacy
      t.string :price
      t.integer :quantity

      t.timestamps
    end
  end
end
