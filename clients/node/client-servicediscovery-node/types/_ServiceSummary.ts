import { _DnsConfig, _UnmarshalledDnsConfig } from "./_DnsConfig";
import {
  _HealthCheckConfig,
  _UnmarshalledHealthCheckConfig
} from "./_HealthCheckConfig";
import {
  _HealthCheckCustomConfig,
  _UnmarshalledHealthCheckCustomConfig
} from "./_HealthCheckCustomConfig";

/**
 * <p>A complex type that contains information about a specified service.</p>
 */
export interface _ServiceSummary {
  /**
   * <p>The ID that AWS Cloud Map assigned to the service when you created it.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that AWS Cloud Map assigns to the service when you create it.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the service.</p>
   */
  Name?: string;

  /**
   * <p>The description that you specify when you create the service.</p>
   */
  Description?: string;

  /**
   * <p>The number of instances that are currently associated with the service. Instances that were previously associated with the service but that have been deleted are not included in the count.</p>
   */
  InstanceCount?: number;

  /**
   * <p>A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.</p>
   */
  DnsConfig?: _DnsConfig;

  /**
   * <p> <i>Public DNS namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="http://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="http://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   */
  HealthCheckConfig?: _HealthCheckConfig;

  /**
   * <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service and specify a value for <code>FailureThreshold</code>. </p> <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application sends an <a>UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p> <note> <p>AWS Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p> </li> </ol> <p>Note the following about configuring custom health checks.</p>
   */
  HealthCheckCustomConfig?: _HealthCheckCustomConfig;

  /**
   * <p>The date and time that the service was created.</p>
   */
  CreateDate?: Date | string | number;
}

export interface _UnmarshalledServiceSummary extends _ServiceSummary {
  /**
   * <p>A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.</p>
   */
  DnsConfig?: _UnmarshalledDnsConfig;

  /**
   * <p> <i>Public DNS namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="http://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="http://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   */
  HealthCheckConfig?: _UnmarshalledHealthCheckConfig;

  /**
   * <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service and specify a value for <code>FailureThreshold</code>. </p> <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application sends an <a>UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p> <note> <p>AWS Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p> </li> </ol> <p>Note the following about configuring custom health checks.</p>
   */
  HealthCheckCustomConfig?: _UnmarshalledHealthCheckCustomConfig;

  /**
   * <p>The date and time that the service was created.</p>
   */
  CreateDate?: Date;
}
