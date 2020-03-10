class CreateDrugPharmacies < ActiveRecord::Migration[6.0]
  def change
    create_table :drug_pharmacies do |t|
      t.float :price
      t.integer :quantity
      t.references :drug, null: false, foreign_key: true
      t.references :pharmacy, null: false, foreign_key: true

      t.timestamps
    end
  end
end
