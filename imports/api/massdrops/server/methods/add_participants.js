import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { MassDrops } from '/imports/api/massdrops/massdrops.js';

Meteor.methods({
    addParticipants: function(id) {
      let selector = {_id:id};
      let curDrop = MassDrops.findOne(selector);
      let curTier = curDrop.cur_tier;
      let nextTier = null;
      if (curTier.id < curDrop.tiers.length) {
        nextTier = curDrop.tiers[curTier.id + 1];
      }
      let updateParticipants = curDrop.participants + 1;
      let updateValue={
        participants: updateParticipants,
      }
        //if participants == nextTier participants, update cur-tier in data base to
      if (nextTier && updateParticipants == nextTier.participants) {
        //update current tier
        curTier = nextTier;
        updateValue.cur_tier = curTier;
      }

    let massDropId = MassDrops.update(selector, {$set: updateValue});

    if(massDropId) {
        return "success";
    } else {
        return "error";
    }

  },

});
