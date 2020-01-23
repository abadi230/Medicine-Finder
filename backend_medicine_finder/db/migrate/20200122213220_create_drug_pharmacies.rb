class CreateDrugPharmacies < ActiveRecord::Migration[6.0]
  def change
    create_table :drug_pharmacies do |t|
      t.string :drug_id
      t.string :pharmacy_id
      t.string :price

      t.timestamps
    end
  end
end
