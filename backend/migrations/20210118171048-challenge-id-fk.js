'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.addForeignKey('commitments', 'challenge', 'challenge_id_fk',
  {
    'challenge_id': 'id'
  },
  {
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
  }, callback);
};

exports.down = function(db, callback) {
  db.removeForeignKey('commitments', 'challenge_id_fk', callback);
};

exports._meta = {
  "version": 1
};
