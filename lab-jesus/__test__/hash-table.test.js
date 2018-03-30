'use strict';

const Sll = require('../lib/sll');
const HashTable = require('../lib/hash-table');




describe('Hash table module', () => {

  describe('constructor', function(){
      
      test('Custom size value- should create an instance of hash table', () => {
          const hash_table = new HashTable(8);
          
          expect(hash_table.size).toEqual(8);
          expect(hash_table.memory.length).toEqual(8);
          expect(hash_table.memory[0] instanceof Sll).toEqual(true);
        });
        
        test('Deafult size value- should create an instance of hash table', () => {
          const hash_table = new HashTable();
    
          expect(hash_table.size).toEqual(512);
          expect(hash_table.memory.length).toEqual(512);
          expect(hash_table.memory[0] instanceof Sll).toEqual(true);
        });
    test('Invalid size value- should create an instance of hash table', () => {
      expect(() => new HashTable(-1025)).toThrow('Invalid size ');
    });
  });

  describe('hash function', function(){
    test('Valid - should return a number within its size', () => {
      const hash_table = new HashTable();
      const hashedKey = hash_table.hash('key');

      expect(0 <= hashedKey < hash_table.size).toBe(true);
    });

    test('Invalid - should throw an error with an invalid type of key', () => {
      const hash_table = new HashTable();

      expect(() => hash_table.hash(0)).toThrow('Invalid type of key');
    });

    test('Invalid - should throw an error with null', () => {
      const hash_table = new HashTable();

      expect(() => hash_table.hash(null)).toThrow('Invalid type of key');
    });
  });

  describe('set function', function(){
    test('Valid - should store a value under key (no collision)', () => {
      const hash_table = new HashTable();
      hash_table.set('key', 'value');

      expect(hash_table.memory[hash_table.hash('key')].head.value).toEqual({'key': 'key', 'val': 'value'});
    });

    test('Valid - should replace a value with new value if key exists', () => {
      const hash_table = new HashTable();
      hash_table.set('key', 'value');
      hash_table.set('key', 'new value');

      expect(hash_table.memory[hash_table.hash('key')].head.value).toEqual({'key': 'key', 'val': 'new value'});
    });

    test('Invalid - should throw an error with an invalid type of key', () => {
      const hash_table = new HashTable();

      expect(() => hash_table.set(-25, 'value')).toThrow('Invalid type of key');
    });
  });

  describe('get function', function(){
    test('Valid - should return a value', () => {
      const hash_table = new HashTable();
      hash_table.set('key', 5);

      expect(hash_table.get('key')).toEqual(5);
    });

    test('Invalid - should throw an error with an invalid type of key', () => {
      const hash_table = new HashTable();

      expect(() => hash_table.get(0)).toThrow('Invalid type of key');
    });

    test('Non existing key- should return null', () => {
      const hash_table = new HashTable();

      expect(hash_table.get('non existing')).toBeNull();
    });
  });

  describe('delete function', function(){
    test('Valid - should delete a node from sll (no collision)', () => {
      const hash_table = new HashTable();
      hash_table.set('key', 100);
      hash_table.delete('key');

      expect(hash_table.get('key')).toBeNull();
      expect(hash_table.memory[hash_table.hash('key')]).toEqual(new Sll());
    });
    
    test('Invalid - should throw an error with an invalid type of key', () => {
      const hash_table = new HashTable();

      expect(() => hash_table.delete(0)).toThrow('Invalid type of key');
    });

    test('Non existing key- should return null', () => {
      const hash_table = new HashTable();

      expect(hash_table.delete('non existing')).toBeNull();
    });
  });

});