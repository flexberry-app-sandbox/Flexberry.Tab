import { Serializer as СоставSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tab-состав';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
