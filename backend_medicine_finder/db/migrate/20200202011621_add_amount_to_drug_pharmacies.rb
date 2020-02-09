class AddAmountToDrugPharmacies < ActiveRecord::Migration[6.0]
  def change
    add_column :drug_pharmacies, :amount, :integer
  end
end
