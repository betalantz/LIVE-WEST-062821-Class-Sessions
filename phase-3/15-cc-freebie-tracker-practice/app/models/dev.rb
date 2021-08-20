class Dev < ActiveRecord::Base

    has_many :freebies
    has_many :companies, through: :freebies

    def received_one?(item_name)
        self.freebies.any? {|freebie| freebie.item_name == item_name }
        # self.freebies.pluck(:item_name).include?(item_name)
        # !self.freebies.where(item_name: item_name).empty?
    end

    def give_away(dev, freebie) # dev and freebie are instances
        # a freebie belongs to dev1
        # we want the freebie to belong to the passed-in dev
        # I need to change the current dev_id on this freebie to the passed in dev_id
        # changing can be done by an update
        freebie.update(dev_id: dev.id)
    end

end
